export function toggleV (t) {
  return {
    type: t
  }
}

export default function (isToggle = false, action) {
  return action.type === 'TOGGLE' ? !isToggle : isToggle;
}
