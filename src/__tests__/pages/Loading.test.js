import renderer from 'react-test-renderer';

import Loading from '../../components/pages/Loading';

test('renders correctly', () => {
  const tree = renderer
    .create(<Loading />)
    .toJSON();

  expect(tree).toMatchSnapshot();

});