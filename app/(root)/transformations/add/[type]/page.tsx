import Header from '@/components/shared/Header';
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

// export default function AddTransformationPage(props) {
export default async function AddTransformationPage({params:{type}}:SearchParamProps) {
  // 원래는 props는 이렇게 리턴 => type: { params: { type: 'restore' }, searchParams: {} }
  const { userId } = auth(); // clerk에서 제공하는 함수사용해서 사용자 id 받기
  const transformation = transformationTypes[type];
  if(!userId) redirect('/sign-in')
  const user = await getUserById(userId);// mongodb가서 사용자 정보 가져오기

  return (
    <>
      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
      />
      <section className="mt-10">
        <TransformationForm 
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
}

