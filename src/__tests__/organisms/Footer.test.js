import renderer from 'react-test-renderer';

import Footer from '../../components/organisms/Footer';

test('renders correctly', () => {
  const tree = renderer
    .create(<Footer />)
    .toJSON();

  expect(tree).toMatchSnapshot();

});