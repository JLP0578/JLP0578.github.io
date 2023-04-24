import renderer from 'react-test-renderer';

import Header from '../../components/organisms/Header';

test('renders correctly', () => {
  const tree = renderer
    .create(<Header />)
    .toJSON();

  expect(tree).toMatchSnapshot();

});