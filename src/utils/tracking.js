const DEFAULT_ENDPOINT = '/api/tracking'

const getTrackingEndpoint = () => {
  if (typeof process !== 'undefined' && process.env && process.env.VUE_APP_TRACKING_ENDPOINT) {
    return process.env.VUE_APP_TRACKING_ENDPOINT
  }
  return DEFAULT_ENDPOINT
}

const buildPayload = (eventType, payload = {}) => ({
  eventType,
  timestamp: new Date().toISOString(),
  pageUrl: typeof window !== 'undefined' ? window.location.href : '',
  userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
  ...payload
})

const postPayload = payload => {
  const endpoint = getTrackingEndpoint()
  const serialized = JSON.stringify(payload)

  if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
    const body = new Blob([serialized], { type: 'application/json' })
    navigator.sendBeacon(endpoint, body)
    return
  }

  if (typeof fetch !== 'undefined') {
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: serialized,
      keepalive: true
    }).catch(() => {
      // 避免影响主流程，不抛出错误
    })
  }
}

export const trackEvent = (eventType, payload = {}) => {
  postPayload(buildPayload(eventType, payload))
}

export const setupTracking = router => {
  if (!router || typeof window === 'undefined') {
    return
  }

  router.afterEach((to, from) => {
    trackEvent('page_view', {
      routeName: to.name || '',
      routePath: to.path,
      referrerRoute: from.path || ''
    })
  })

  document.addEventListener(
    'click',
    event => {
      const clickable = event.target && event.target.closest('[data-track]')
      if (!clickable) {
        return
      }

      trackEvent('click', {
        trackId: clickable.getAttribute('data-track') || '',
        text: (clickable.innerText || '').trim().slice(0, 80)
      })
    },
    true
  )
}
