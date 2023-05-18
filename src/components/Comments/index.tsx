import { useEffect, useRef } from 'react';

type Props = {
  title: string;
}

export default function Comments({ title }: Props) {
  const commentBox = useRef(null);

  useEffect(() => {
    let scriptEl = document.createElement('script')
    scriptEl.setAttribute('theme', 'dark-blue')
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js')
    scriptEl.setAttribute('crossorigin', 'anonymous')
    scriptEl.setAttribute('repo', 'PaulaSalinoRibeiro/my-blog')
    scriptEl.setAttribute('issue-term', 'title')
    commentBox.current.replaceChildren(scriptEl)

  }, [title])

  return <div style={{ width: '100%' }} ref={commentBox}></div>
}