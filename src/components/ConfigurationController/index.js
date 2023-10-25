import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const contentChange = event => onToggleShowContent(event.target.value)
      const leftnavChange = event => onToggleShowLeftNavbar(event.target.value)
      const rightnavChange = event =>
        onToggleShowRightNavbar(event.target.value)

      return (
        <div>
          <h1>Layout</h1>
          <div>
            <label htmlFor="content">Content</label>
            <input type="checkbox" id="content" onChange={contentChange} />
            <label htmlFor="leftnav">Left Navbar</label>
            <input type="checkbox" id="leftnav" onChange={leftnavChange} />
            <label htmlFor="rightnav">Right Navbar</label>
            <input type="checkbox" id="rightnav" onChange={rightnavChange} />
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
