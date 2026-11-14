<template>
  <div class="hero-art" aria-hidden="true">
    <div class="art-grid" />
    <div class="orb-aura neon-decoration" />
    <svg class="orbital-art" viewBox="0 0 600 600" fill="none">
      <defs>
        <linearGradient id="ringStroke" x1="140" y1="80" x2="440" y2="530" gradientUnits="userSpaceOnUse"><stop stop-color="#ded3ff"/><stop offset=".35" stop-color="#9c7af9"/><stop offset=".73" stop-color="#38235e"/><stop offset="1" stop-color="#8f6dd4"/></linearGradient>
        <linearGradient id="monogramFace" x1="212" y1="178" x2="400" y2="412" gradientUnits="userSpaceOnUse"><stop stop-color="#eee7ff"/><stop offset=".4" stop-color="#bea7ff"/><stop offset="1" stop-color="#7952cb"/></linearGradient>
        <linearGradient id="orbFill" x1="180" y1="120" x2="440" y2="470" gradientUnits="userSpaceOnUse"><stop stop-color="#282037"/><stop offset="1" stop-color="#100e17"/></linearGradient>
        <filter id="ringGlow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="7"/></filter>
      </defs>
      <g class="orbit-lines" stroke="#30273e"><circle cx="300" cy="300" r="258" stroke-dasharray="2 9"/><circle cx="300" cy="300" r="224"/><path d="M300 18v40M300 542v40M18 300h40M542 300h40"/></g>
      <g transform="rotate(-28 300 300)"><ellipse class="neon-decoration" cx="300" cy="300" rx="248" ry="146" stroke="#9562ff" stroke-width="5" filter="url(#ringGlow)"/><ellipse cx="300" cy="300" rx="248" ry="146" stroke="url(#ringStroke)" stroke-width="1.5"/></g>
      <circle cx="300" cy="300" r="168" fill="url(#orbFill)" stroke="#5c447c"/>
      <circle cx="300" cy="300" r="153" stroke="#352a46"/>
      <path d="M207 365V225l43-19 57 91 56-116 44 22v162l-44 20V269l-52 97-18 9-43-71v82l-43-21Z" fill="#392558" stroke="#65468d"/>
      <path d="M193 351V211l43-19 57 91 56-116 44 22v162l-44 20V255l-52 97-18 9-43-71v82l-43-21Z" fill="url(#monogramFace)"/>
      <path d="m193 211 43-19 57 91m56-116 44 22v162" stroke="#eee7ff" stroke-opacity=".65"/>
      <g transform="rotate(-28 300 300)"><path d="M52 300c0 80.6 111 146 248 146s248-65.4 248-146" stroke="url(#ringStroke)" stroke-width="2"/></g>
      <circle cx="80" cy="363" r="5" fill="#d3bfff"/><circle class="neon-decoration" cx="80" cy="363" r="9" fill="#a879ff" filter="url(#ringGlow)"/>
      <circle cx="497" cy="187" r="4" fill="#d3bfff"/>
      <path d="m300 33 4 8-4 8-4-8 4-8Z" fill="#c4adff"/>
    </svg>
    <div class="orbit-label label-interface"><span class="label-icon"><AppIcon name="code" /></span><div><span class="micro-label">СНАРУЖИ</span><strong>Интерфейс</strong></div><span class="label-point" /></div>
    <div class="orbit-label label-server"><span class="label-icon"><AppIcon name="server" /></span><div><span class="micro-label">ВНУТРИ</span><strong>Логика и данные</strong></div></div>
    <div class="art-caption"><span /> Один продукт. Связанные детали.</div>
  </div>
</template>
