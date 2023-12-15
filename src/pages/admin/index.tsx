import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AdminIndex = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/admin/jobs');
    //eslint-disable-next-line
  }, []);

  return null;
};

export default AdminIndex;
