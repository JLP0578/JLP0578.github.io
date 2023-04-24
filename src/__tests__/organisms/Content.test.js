import renderer from 'react-test-renderer';

import Content from '../../components/organisms/Content';

test('renders correctly', () => {
  const tree = renderer
    .create(<Content />)
    .toJSON();

  expect(tree).toMatchSnapshot();

});