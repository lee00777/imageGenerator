import React from 'react';

// children을 {}로 감싼 이유는 destruction 때문임. 즉, children.id 이렇게 접근하는 대신 바로 id로 접근하기 위해서임.

export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <main className="auth">
      {children}
    </main>
  );
}
