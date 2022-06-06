import HorizontalNav from '../HorizontalNav/HorizontalNav';
import { useStyles } from './AboutUs.styles';
import Container from '@material-ui/core/Container';
import PhotoContentStripe from '../PhotoContentStripe/PhotoContentStripe';
import { content as Content } from './aboutUsContent';
import { aboutUs1, aboutUs2, loremIpsumArray } from './content.helpers';

export default function AboutUs() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.root}>
        <HorizontalNav />
        <h1>About</h1>
      </Container>
      <PhotoContentStripe imgSource={'/photos/us7.jpg'} photoPosition='left'>
        <Content textContentArray={aboutUs1}/>
      </PhotoContentStripe>
      <div className={classes.paper} elevation={6}>
        <h2>And then there was more stuff...</h2>
      </div>
      <PhotoContentStripe imgSource={'/photos/us8.jpg'} photoPosition='right'>
        <Content textContentArray={aboutUs2}/>
      </PhotoContentStripe>
      <div className={classes.paper} elevation={6}>
        <h2>And finally...</h2>
      </div>
      <PhotoContentStripe imgSource={'/photos/us9.jpg'} photoPosition='left'>
        <Content textContentArray={loremIpsumArray}/>
      </PhotoContentStripe>
    </div>
  )
}
