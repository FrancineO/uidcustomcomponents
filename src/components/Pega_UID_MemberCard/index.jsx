import PropTypes from 'prop-types';
import StyledPegaUidMemberCardWrapper from './styles';

import {
  Avatar,
  Card,
  EmailDisplay,
  Flex,
  Grid,
  Text,
  Configuration,
  useTheme
} from '@pega/cosmos-react-core';

const PegaUidMemberCard = props => {
  let { datasource, mainColor } = props;
  let firstName,
    lastName,
    role,
    picture,
    ID,
    email = '';

  const PCore = {
    getEnvironmentInfo: () => {
      return {
        getTheme: () => {
          return useTheme();
        }
      };
    }
  };

  if (datasource && datasource.source) {
    ID = datasource.source[0].ID;
    firstName = datasource.source[0].firstName;
    lastName = datasource.source[0].lastName;
    email = datasource.source[0].email;
    role = datasource.source[0].role;
    picture = datasource.source[0].picture;
  }

  const theme = PCore?.getEnvironmentInfo().getTheme();
  console.log(firstName);

  return (
    <Configuration theme={theme}>
      <StyledPegaUidMemberCardWrapper>
        <Card className='card'>
          <div className={`additional ${mainColor === 'Warn' ? 'warn' : ''}`}>
            <Flex className='user-card' container={{ alignItems: 'center', justify: 'start' }}>
              <Avatar
                className='avatar'
                shape='circle'
                size='xl'
                name={firstName}
                imageSrc={picture}
              />
              <Flex
                className='more-info'
                container={{ direction: 'column', alignItems: 'center', justify: 'start', gap: 2 }}
              >
                <Text variant='h1'>
                  {firstName} {lastName}
                </Text>
                <Text variant='primary' status={null}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris,
                  at molestie lacus. Nam vestibulum sodales odio ut pulvinar.
                </Text>
              </Flex>
            </Flex>
          </div>
          <Flex
            className='general'
            container={{ direction: 'column', alignItems: 'center', justify: 'start' }}
          >
            <Text variant='h1'>
              {firstName} {lastName}
            </Text>
            <Grid
              container={{
                cols: '1fr 2fr',
                pad: 2,
                justifyContent: 'space-around'
              }}
              height={20}
            >
              <Text variant='primary'>Email</Text>
              <EmailDisplay value={email} displayText={email} variant='link' />
              <Text variant='primary'>Role</Text>
              <Text variant='primary'>{role}</Text>
            </Grid>
          </Flex>
        </Card>
      </StyledPegaUidMemberCardWrapper>
    </Configuration>
  );
};

PegaUidMemberCard.defaultProps = {};

PegaUidMemberCard.propTypes = {
  datasource: PropTypes.instanceOf(Object)
};

export default PegaUidMemberCard;
