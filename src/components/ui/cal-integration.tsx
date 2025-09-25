'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    Cal?: any
  }
}

export function CalIntegration() {
  useEffect(() => {
    // Create the Cal.com inline script
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "kyc", {origin:"https://app.cal.com"});
      
      Cal.ns.kyc("floatingButton", {
        "calLink":"james-mweni-mrwrhm/kyc",
        "config":{"layout":"month_view"}
      }); 
      
      Cal.ns.kyc("ui", {
        "hideEventTypeDetails":false,
        "layout":"month_view"
      });
    `
    
    document.head.appendChild(script)

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return null
}
