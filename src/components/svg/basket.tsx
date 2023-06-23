interface Props{
    fill:string
}
const BasketIcon = ({fill}:Props) => {
    return ( <svg id="Layer_1" fill={fill} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs></defs><title>icon</title><path  class="cls-1" d="M360.41,330.46l-66.83-66.83a144,144,0,0,0,29.08-86.92C322.66,96.89,257.72,32,177.9,32S33.13,96.89,33.13,176.71,98.08,321.47,177.9,321.47a143.91,143.91,0,0,0,84.16-27.09l67.22,67.22a22,22,0,0,0,31.13-31.14Zm-182.51-53A100.73,100.73,0,1,1,278.63,176.71,100.85,100.85,0,0,1,177.9,277.44Z"/></svg> );
}
 
export default BasketIcon;