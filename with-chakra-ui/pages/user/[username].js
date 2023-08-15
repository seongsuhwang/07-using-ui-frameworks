import Link from 'next/link';
import {
  Avatar,
  Box,
  Center,
  Text,
  Image,
  Button,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import users from '../../data/users';

// getStaticPaths는 Next.js 프레임워크에서 제공하는 하나의 데이터 페칭(fetching) 메서드
// 동적 라우팅(dynamic routing)을 사용할 때 필요한 함수
// getStaticPaths를 사용하여 동적 라우트 경로의 매개변수를 처리하고 미리 정의된 경로에 대한 데이터를 가져올 수 있음
export function getStaticPaths() {
  const paths = users.map((user) => ({
    params: {
      username: user.username,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// getStaticProps는 Next.js 프레임워크에서 제공하는 하나의 데이터 페칭(fetching) 메서드
// getStaticProps는 서버 측에서만 실행되며, 클라이언트 측에서는 실행되지 않음
export function getStaticProps({ params }) {
  const { username } = params;

  return {
    props: {
      user: users.find((user) => user.username === username),
    },
  };
}

function UserPage({ user }) {
  return (
    <Center marginTop={['0', '0', '8']} boxShadow="lg" minHeight="fit-content">
      <Box>
        <Box position="relative">
          <Image src={user.cover_image} width="fit-content" objectFit="cover" />
          <Flex
            alignItems="flex-end"
            position="absolute"
            top="0"
            left="0"
            backgroundColor={useColorModeValue('blackAlpha.400', 'blackAlpha.600')}
            width="100%"
            height="100%"
            padding="8"
            color="white">
            <Avatar size="lg" src={user.avatar} />
            <Box marginLeft="6">
              <Text as="h1" fontSize="xx-large" fontWeight="bold">
                {user.first_name} {user.last_name}
              </Text>
              <Text as="p" fontSize="large" lineHeight="1.5">
                {user.job_title}
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box
          maxW="container.xl"
          margin="auto"
          padding="8"
          backgroundColor={useColorModeValue('white', 'gray.700')}>
          <Text as="p">{user.description}</Text>
          <Link href="/" passHref>
            {/* as 속성은 해당 컴포넌트를 원하는 태그 요소로 렌더링 하라고 지시 */}
            <Button marginTop="8" colorScheme="whatsapp" as="a">
              Back to all users
            </Button>
          </Link>
        </Box>
      </Box>
    </Center>
  );
}

export default UserPage;
