import renderer from 'react-test-renderer';

import Temp from '../../components/organisms/Temp';

test('renders correctly', () => {
  const tree = renderer
    .create(<Temp />)
    .toJSON();

  expect(tree).toMatchSnapshot();

});