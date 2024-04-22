export const Footer = () => {
  const nowYear = new Date().getFullYear()
  return (
    <footer className="p-4 md:p-8 border-t">
      <p>©{nowYear === 2024 ? nowYear : `2024-${nowYear}`} アトリエ<span className="text-primary">にじか</span> feat.<span className="text-[#0099FF]">かがみ</span>， 内容基于 <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode">CC-BY-SA 4.0</a> 授权</p>
      {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA && <p>版本：{process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}-{process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF}</p> }
    </footer>
  )
}