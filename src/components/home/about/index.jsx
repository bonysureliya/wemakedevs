import Stats from '../Stats';
import ColumnSection from '../../layout/ColumnSection';
import ListItem from '../../Listitem';
import AboutImage from '../../../assets/home/aboutus.png';

const About = ({ background = 'static' }) => {
  return (
    <section className={background === 'gradient' ? 'gradient' : 'static-bg'}>
      <ColumnSection
        id='about'
        as='div'
        imgSrc={AboutImage}
        title='About us'
        buttonLinks={[
          {
            name: 'Discord',
            href: 'https://discord.gg/wemakedevs',
          },
          {
            name: 'Telegram',
            href: 'https://t.me/WeMakeDevs',
          },
          {
            name: 'Newsletter',
            href: '#newsletter',
          },
        ]}
      >
        <ListItem>
          We believe that everyone, irrespective of their college or branch,
          technical or non-technical background can make it big.{' '}
          <span className='highlight highlight--white'>
            {' '}
            WeMakeDevs is an initiative built on this thought.{' '}
          </span>
        </ListItem>
        <ListItem>
          We provide{' '}
          <span className='highlight highlight--white'>
            hands-on training, mentorship for FREE
          </span>{' '}
          and have an{' '}
          <span className='highlight highlight--white'>
            inclusive community.
          </span>
        </ListItem>
        <ListItem>
          Get{' '}
          <span className='highlight highlight--white'>
            expert guidance with career
          </span>
          , Open Source, and internships, jobs around the world.
        </ListItem>
        <ListItem>
          We are also having various{' '}
          <span className='highlight highlight--white'>
            events weekly or monthly.{' '}
          </span>
          Do participate in those events to make your skills enhance.
        </ListItem>
      </ColumnSection>
      <Stats />
    </section>
  );
};

export default About;
