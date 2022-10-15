import Section from './section/Section'

import Profile from './profile/Profile'
import user from './profile/user.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 24,
        color: '#010101'
      }}
    >
      React homework template
      <Section title='Task 1. Social link profile'>
        <Profile
          name={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        /> 
      </Section> 
      
      <Section title='Task 2. Stat section'>
        
      </Section>
    </div>
    
  );
};
