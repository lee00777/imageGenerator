import Header from '@/components/shared/Header';
import { transformationTypes } from '@/constants';

// export default function AddTransformationPage(props) {
export default function AddTransformationPage({params:{type}}:SearchParamProps) {
  // 원래는 props는 이렇게 리턴 => type: { params: { type: 'restore' }, searchParams: {} }

  const transformation = transformationTypes[type];
  return (
    <Header 
      title={transformation.title}
      subtitle={transformation.subTitle}
    >
    </Header>
  );
}

