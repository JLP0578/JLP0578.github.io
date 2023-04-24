import renderer from 'react-test-renderer';

import Icons from '../../components/atoms/Icons';

test('renders correctly', () => {
  const tree = renderer
    .create(<Icons />)
    .toJSON();

  expect(tree).toMatchSnapshot();

});