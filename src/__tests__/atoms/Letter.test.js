import renderer from 'react-test-renderer';

import Letter from '../../components/atoms/Letter';

test('renders correctly', () => {
  const tree = renderer
    .create(<Letter />)
    .toJSON();

  expect(tree).toMatchSnapshot();

});