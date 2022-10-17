import { Section } from 'components/Section/Section';

import { Profile } from 'components/Profile/Profile';
import user from 'data/user.json';

import { Statistics } from 'components/Statistics/Statistics';
import data from '../data/data.json';

import { FriendList } from 'components/FriendList/FriendList';
import friends from 'data/friends.json';

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';

export function App() {
  return (
    <>
      <Section title="Task 1. Social link profile">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title="Task 2. Stat section">
        <Statistics title="Upload stats" stats={data} />
      </Section>

      <Section>
        <Statistics stats={data} />
      </Section>

      <Section title="Task 3. Friend list">
        <FriendList friends={friends} />
      </Section>

      <Section title="Task 4. Transaction history">
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
}
