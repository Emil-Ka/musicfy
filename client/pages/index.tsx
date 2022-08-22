import { Htag, Player, TrackCard, ProgressBar, Tracks } from '../src/components';
import { Layout } from '../src/Layout/Layout';
import { ITrack } from '../src/types/track.type';

import styles from '../styles/pages/index.module.scss';

const Home = (): JSX.Element => {
	const track: ITrack[] = [
		{
			id: 1,
			title: 'Weekly song',
			file: 'rt',
			cover: 'https',
			album_id: 3,
		},
		{
			id: 1,
			title: 'Weekly song',
			file: 'rt',
			cover: 'https',
			album_id: 3,
		},
		{
			id: 1,
			title: 'Weekly song',
			file: 'rt',
			cover: 'https',
			album_id: 3,
		},
		{
			id: 1,
			title: 'Weekly song',
			file: 'rt',
			cover: 'https',
			album_id: 3,
		},
		{
			id: 1,
			title: 'Weekly song',
			file: 'rt',
			cover: 'https',
			album_id: 3,
		},
		{
			id: 1,
			title: 'Weekly song',
			file: 'rt',
			cover: 'https',
			album_id: 3,
		},
		{
			id: 1,
			title: 'Weekly song',
			file: 'rt',
			cover: 'https',
			album_id: 3,
		},
		{
			id: 1,
			title: 'Weekly song',
			file: 'rt',
			cover: 'https',
			album_id: 3,
		},
		{
			id: 1,
			title: 'Weekly song',
			file: 'rt',
			cover: 'https',
			album_id: 3,
		},
	];

	return (
		<>
			<Layout>
				<Tracks tracks={track} />
			</Layout>
			<Player />
		</>
	);
};

export default Home;
