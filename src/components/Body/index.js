import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div>
          {showLeftNavbar ? (
            <nav>
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </nav>
          ) : (
            ''
          )}
          {showContent ? (
            <div>
              <h1>COntent</h1>
              <p>Lorem ipsum dolor sit amet,consectetur,adipiscing</p>
            </div>
          ) : (
            ''
          )}

          {showRightNavbar ? (
            <nav>
              <h1>Right Navbar</h1>
              <div>
                <p>Ad 1</p>
              </div>
              <div>
                <p>Ad 2</p>
              </div>
            </nav>
          ) : (
            ''
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
