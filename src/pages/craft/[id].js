import {useRouter} from 'next/router';

import Container from '@/components/Container';
import Link from 'next/link';

import Project from '@/components/Project';

function CraftPage() {
  const router = useRouter();

  const {id} = router.query;

  return (
    <Container>
      <div className="max-w-prose mx-auto">
        <Link href="/new?from=craft" as="/">
          {`<- Go back`}
        </Link>

        <Project title={id}>
          <div className="mt-8">Children</div>
        </Project>
      </div>
    </Container>
  );
}

export default CraftPage;
