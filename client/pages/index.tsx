import { Htag, Player, TrackCard, ProgressBar, Tracks } from '../src/components';
import { Layout } from '../src/Layout/Layout';
import { useTypedDispatch, useTypedSelector } from '../src/hooks';

import styles from '../styles/pages/index.module.scss';

const Home = (): JSX.Element => {
	const dispatch = useTypedDispatch();
	const { rows: tracks, loading, error } = useTypedSelector((state) => state.track);

	return (
		<>
			<Layout>
				<Tracks tracks={tracks} />
			</Layout>
			<Player />
		</>
	);
};

export default Home;
