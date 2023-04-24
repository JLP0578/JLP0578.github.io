import renderer from 'react-test-renderer';

import ClusterCard from '../../components/molecules/ClusterCard';

test('renders correctly', () => {
  const tree = renderer
    .create(<ClusterCard />)
    .toJSON();

  expect(tree).toMatchSnapshot();

});