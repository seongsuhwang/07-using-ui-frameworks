import { Box, Grid, Text, GridItem } from '@chakra-ui/react';
import UserCard from '../components/UserCard';
import users from '../data/users';

export default function Home() {
  return (
    <Box>
      <Text fontSize="xxx-large" fontWeight="extrabold" textAlign="center" marginTop="9" backgroundColor="brand.400" borderWidth="10">
        ACME Corporation Employees
      </Text>
      <Grid
        gridGap="10"
        padding="10">
        {users.map((user) => (
          <GridItem key={user.id}>
            <UserCard {...user} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
