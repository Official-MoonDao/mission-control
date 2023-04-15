const BlurBackground = ({styles}) => {
  return (
    <div className={`${!styles? "rounded-2xl" : styles} absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 blur dark:from-moon-gold dark:to-amber-400`}></div>
  )
}

export default BlurBackground

/*

* Parent must have the *relative* class for this to work, this component must be placed right below the parent div of the whole component.
* Depending how the HTML is structured for certain components, this might not work.
* Components generally are rounded-2xl, this component defaults to that but can accept other properties to make it fit other shapes.

*/