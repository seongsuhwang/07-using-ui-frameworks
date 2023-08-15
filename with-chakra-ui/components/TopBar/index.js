import { Box, Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function TopBar() {
  return (
    <Box width="100%" padding="1" backgroundColor="whatsapp.500">
      <Box maxWidth="container.xl" margin="auto">
        <Button
          aria-label="UI Theme"
          size="xs"
          marginRight="2"
          borderRadius="sm">
          Toggle theme
        </Button>
      </Box>
    </Box>
  );
}

export default TopBar;
