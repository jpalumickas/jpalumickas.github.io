import Image from 'next/image'
import { LinkedInIcon } from '../components/icons/LinkedIn'
import { MailIcon } from '../components/icons/Mail'
import { GitHubIcon } from '../components/icons/GitHub'
import { TwitterIcon } from '../components/icons/Twitter'
import { SocialLink } from '../components/SocialLink'

export default function Page() {
  return (
    <div className="w-screen h-screen flex flex-col flex-1 justify-center items-center">
      <div className="mb-4">
        <Image
          src="https://www.gravatar.com/avatar/6d5c3a1354b53442fe342b2189e76a7a?s=200"
          alt="Justas Palumickas"
          width="100"
          height="100"
          className="rounded-full"
        />
      </div>
      <h1 className="text-4xl text-gray-400 font-extralight">
        {"Hi, I'm "}
        <span className="font-light text-gray-600">Justas Palumickas</span>
      </h1>
      <div className="mt-8 flex justify-center">
        <SocialLink
          title="LinkedIn"
          href="https://linkedin.com/in/jpalumickas"
          className="mr-12"
        >
          <LinkedInIcon className="w-12 h-12" />
        </SocialLink>
        <SocialLink
          title="GitHub"
          href="https://github.com/jpalumickas"
          className="mr-12"
        >
          <GitHubIcon className="w-12 h-12" />
        </SocialLink>
        <SocialLink
          title="Twitter"
          href="https://twitter.com/jpalumickas"
          className="mr-12"
        >
          <TwitterIcon className="w-12 h-12" />
        </SocialLink>
        <SocialLink title="Email" href="mailto:hi@justas.dev">
          <MailIcon className="w-12 h-12" />
        </SocialLink>
      </div>
    </div>
  )
}
