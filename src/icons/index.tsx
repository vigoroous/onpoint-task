import "styles/icons.css"
import { transform } from "typescript"

const IconHome = () =>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 43.875 38.438">
        <path className="icon-home" d="M2.12,23.351L22.431,4.808,42.187,23.349l0.479-.492L22.671,4.085a0.338,0.338,0,0,0-.474,0L1.648,22.855Zm5.07-.155V40.1a0.339,0.339,0,0,0,.342.342H18.083a0.341,0.341,0,0,0,.241-0.1,0.346,0.346,0,0,0,.1-0.242V30.255h7.834V40.1a0.34,0.34,0,0,0,.342.342H37.335a0.336,0.336,0,0,0,.241-0.1,0.348,0.348,0,0,0,.1-0.242V23.2H36.995V39.759H26.939V29.913a0.35,0.35,0,0,0-.1-0.245,0.339,0.339,0,0,0-.241-0.1H18.083a0.345,0.345,0,0,0-.243.1,0.361,0.361,0,0,0-.1.245v9.846H7.871V23.2H7.189Z" transform="translate(-0.219 -3)" />
    </svg>

const IconDivider = () =>
    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="26" viewBox="0 0 4 52">
        <path className="icon-divider" d="M93,50V1" transform="translate(-92)" />
    </svg>

const IconArrowRight = () =>
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="19.5" height="14" viewBox="0 0 39 28">
        <image width="39" height="28" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAcCAYAAADiHqZbAAACC0lEQVRYhc2XT4hNURjAf2/emGnG0ERCMljaKjbM0mpSVrIgWVlYTCyFWIiNYmNhMfm3UoiFBRvZ2ExKWSopg800qQmDmZ+Ozst1nFd3Xu5796uv2/nzfd/vfPfc75yLWqU21bPqZ/WeOrqcWFXDjavv/SNX1P6y9n1UKxuBTYUIk8AFoFEqasWZW68+9F85V4fX2gJ8nuAtqafqABd0s/oiAVxUT9QBLuh2dToBXFCP1QEu6E71dQI4qx6pA1zQ3eqbBPCDerAOcEH3qDMJ4Cd1og5wQXeprzKA4605jd+EMAKsAppAf6ZIhvZP4Hum3w7KeLD7CEwAd4DRwtgMsB+YDiD7gAPAWAQbjJDFoH0RbD4JEub/KF3x//Y3F30uJmPhRLkBHA+ZewtsXabz/ym2WdzLAPcFGOohXDuZDXCngUPAmriCZtSiNGL6W3uuUXh2sueCfIv+NgDDSfYWgJMBLnRuA9bFvTCYyWQjOpsvtFu61AFYiPMO2AFMxdgtCYs9CtzsZSlZrT7I3Fgme13nxtQnGbAzvS7CW9RHGbCL6dxug4W73d0M2OXc9b2bYCPq7QzYNXUoZ9MtsAH1egbslrqynV03wFaoVzNg9+MX29a2arBh9XwG7HGZf9iq4faqXxOwp+raMvZV/7eGY2mg0H4GHA7nZinrijMXvtBL6lysbaHGlbNVfgEMd7JrEVlT6wAAAABJRU5ErkJggg==" />
    </svg>

const IconClose = () =>
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 89 89">
        <path className="icon-close" d="M47,0V89" />
        <path className="icon-close" d="M89,48H0" />
    </svg>

const IconNext = () =>
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="14.5" height="21" viewBox="0 0 29 42">
        <path fill-rule="evenodd" stroke="rgb(0, 0, 0)" stroke-width="4px" stroke-linecap="round" stroke-linejoin="miter" fill="none"
            d="M4.981,4.849 L21.173,19.985 L4.981,35.122 " />
    </svg>


export { IconHome, IconDivider, IconArrowRight, IconClose, IconNext }