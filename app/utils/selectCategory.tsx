export const choiceCategory = (color = '#eeeeee') => ({
  alignItems: 'center',
  display: 'flex',

  '::before': {
    backgroundColor: color,
    borderRadius: 20,
    content: '" "',
    display: 'block',
    marginRight: 10,
    height: 20,
    width: 20
  }
})
