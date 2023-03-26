import {useRouter} from 'next/router';

import Container from '@/components/Container';
import Link from 'next/link';

import linkStyles from '@styles/Index.module.scss';
import Project from '@/components/Project';

function CraftPage() {
  const router = useRouter();

  const {id} = router.query;

  return (
    <Container>
      <Link className={linkStyles.link} href="/?from=craft" as="/">
        {`<- Go back`}
      </Link>

      <Project title={id}>
        <div className="mt-8">Children</div>
      </Project>
    </Container>
  );
}

export default CraftPage;
