import { loadWhop } from '@whop/elements';

let whopElements;
export function getWhopElements(){
  if(!whopElements) whopElements = loadWhop();
  return whopElements;
}
