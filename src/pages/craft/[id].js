import {useRouter} from 'next/router';

import Link from 'next/link';
import Container from '@/components/Container';

function CraftPage() {
  const router = useRouter();

  const {id} = router.query;

  return (
    <Container>
      <Link href="/">{`<- Go back`}</Link>
      <div>Craft: {id}</div>
    </Container>
  );
}

export default CraftPage;
