import localFont from 'next/font/local'
import Link from 'next/link'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <h1 className='bg-gradient-to-r from-slate-600 to-gray-200 bg-clip-text text-transparent font-bold text-6xl'>
          Hi, I'm Jamie
        </h1>
        <h3 className='text-xl text-slate-300'>
          A senior web developer with over 2 years experience in the fintech
          industry. Specialising in professional services and product
          development for high-profile clients such as Rathbones, RBC, HSBC,
          UBS, and Nomura.
        </h3>
        <Link href='/about' className='border'>
          Go to the about page
        </Link>
        <Link href='/contact' className='border'>
          Go to the contact page
        </Link>
        <div>
          {/* <!-- Timeline --> */}
          <div className=''>
            {/* <!-- Item 1 --> */}
            <div className='group relative flex gap-x-5'>
              {/* <!-- Icon --> */}
              <div className='relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700'>
                <div className='relative z-10 size-6 flex justify-center items-center'>
                  <img
                    src='https://investcloud.com/wp-content/uploads/2024/09/IC-abbreviated-RGB.png'
                    alt=''
                    width='22'
                    height='19'
                  />
                  {/* <svg
                    className='shrink-0 size-6 text-gray-600 dark:text-neutral-400'
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11.7438 0.940745C6.84695 1.30308 2.6841 1.63631 2.48837 1.67533C1.9396 1.77319 1.44038 2.14544 1.20563 2.63537L1 3.06646L1.01982 13.3407L1.04893 23.615L1.36234 24.2517C1.53886 24.6042 2.73365 26.2499 4.0362 27.9439C6.61221 31.2836 6.79802 31.47 7.77726 31.5679C8.06156 31.597 10.1966 31.4991 12.5081 31.3622C14.8295 31.2154 18.5508 30.99 20.7842 30.863C30.3233 30.2839 29.8334 30.3328 30.3815 29.8627C31.0672 29.2947 31.0183 30.2251 31.0474 17.7377C31.0672 7.15003 31.0573 6.45509 30.9006 6.13177C30.7148 5.76943 30.3815 5.51487 26.0329 2.45885C23.1243 0.421704 22.9186 0.313932 21.6155 0.294111C21.0772 0.274911 16.6307 0.568497 11.7438 0.940745ZM22.752 2.28232C23.1633 2.46814 26.1704 4.56412 26.6108 4.9661C26.7284 5.08378 26.7675 5.18164 26.7086 5.24048C26.5717 5.35817 7.96245 6.465 7.42421 6.38634C7.17956 6.34732 6.81722 6.20052 6.61159 6.06302C5.75932 5.48514 3.64413 3.75149 3.64413 3.62452C3.64413 3.29129 3.57538 3.29129 11.8714 2.69421C13.4582 2.58644 16.0633 2.39071 17.6502 2.26312C21.0871 1.98874 22.1159 1.99865 22.752 2.28232ZM28.6677 7.63996C28.8046 7.77685 28.9223 8.04132 28.9613 8.29589C28.9904 8.53125 29.0102 12.9189 28.9904 18.0313C28.9613 26.8067 28.9514 27.3555 28.7848 27.61C28.6869 27.7667 28.4912 27.9333 28.3438 27.9823C27.9331 28.1489 8.43318 29.2557 8.03183 29.138C7.84601 29.0891 7.59083 28.9324 7.45394 28.7955L7.21858 28.541L7.18947 19.0799C7.16965 12.4395 7.18947 9.5012 7.26813 9.23672C7.32697 9.041 7.47376 8.80564 7.60136 8.72759C7.77788 8.60991 8.93364 8.51205 12.9101 8.2773C15.7016 8.1206 20.0206 7.85613 22.4987 7.70933C28.3933 7.34638 28.3741 7.34638 28.6677 7.63996Z'
                      className='fill-black dark:fill-neutral-200'
                      fill='currentColor'
                    ></path>
                    <path
                      d='M23.4277 10.8818C22.3698 10.9506 21.4296 11.0484 21.3218 11.1073C20.9985 11.2739 20.8028 11.5483 20.7638 11.8617C20.7347 12.185 20.8325 12.224 21.8898 12.3516L22.35 12.4104V16.5925C22.35 19.0799 22.311 20.7256 22.2621 20.6767C22.2131 20.6178 20.8226 18.5027 19.167 15.9756C17.512 13.4392 16.1407 11.3525 16.1209 11.3333C16.1011 11.3135 15.024 11.3724 13.7313 11.4609C12.1445 11.5687 11.273 11.6666 11.0965 11.7644C10.8122 11.9112 10.4988 12.4303 10.4988 12.7734C10.4988 12.979 10.871 13.0868 11.6545 13.0868H12.0658V25.1139L11.4 25.3196C10.8809 25.4763 10.7044 25.5741 10.6165 25.7698C10.4598 26.1031 10.4697 26.4066 10.6264 26.4066C10.6852 26.4066 11.792 26.3378 13.0649 26.2598C15.582 26.113 15.8657 26.0442 16.1302 25.5252C16.2088 25.3685 16.277 25.2019 16.277 25.1529C16.277 25.1139 15.9345 24.9962 15.5226 24.8984C15.1014 24.8005 14.6802 24.7027 14.5923 24.6828C14.4257 24.6339 14.4157 24.3304 14.4157 20.1186V15.6033L17.3931 20.2753C20.5173 25.1721 20.9093 25.7308 21.3893 25.9755C21.987 26.2889 23.5051 26.0733 24.2688 25.5741L24.5042 25.4273L24.524 18.7479L24.5531 12.0586L25.0722 11.9608C25.6891 11.8431 25.9734 11.5594 25.9734 11.0695C25.9734 10.7561 25.9536 10.7362 25.66 10.7462C25.4847 10.7542 24.4757 10.813 23.4277 10.8818Z'
                      className='fill-black dark:fill-neutral-200'
                      fill='currentColor'
                    ></path>
                  </svg> */}
                </div>
              </div>
              {/* <!-- End Icon --> */}
              {/* <!-- Right Content --> */}
              <div className='grow pb-8 group-last:pb-0'>
                <h3 className='mb-1 text-xs text-gray-600 dark:text-neutral-400'>
                  2024 - Present
                </h3>
                <p className='font-semibold text-sm text-gray-800 dark:text-neutral-200 mb-2'>
                  InvestCloud
                </p>

                <p className='font-semibold text-md text-gray-800 dark:text-neutral-200'>
                  Senior Web Developer
                </p>

                <ul className='list-disc ms-6 mt-3 space-y-1.5'>
                  <li className='ps-1 text-sm text-gray-600 dark:text-neutral-400'>
                    <span className='font-bold'>Client-Centric Solutions:</span>{' '}
                    Developed and maintained web applications for prestigious
                    clients, including Rathbones, RBC, HSBC, UBS, and Nomura,
                    ensuring solutions meet each client&apos;s security,
                    scalability, and regulatory compliance requirements.
                  </li>
                  <li className='ps-1 text-sm text-gray-600 dark:text-neutral-400'>
                    <span className='font-bold'>
                      Professional Services Focus:
                    </span>{' '}
                    Specialised in delivering professional services, including
                    custom implementations and support for enterprise clients,
                    contributing to client satisfaction and retention.
                  </li>
                  <li className='ps-1 text-sm text-gray-600 dark:text-neutral-400'>
                    <span className='font-bold'>
                      Product Development Contributions:
                    </span>{' '}
                    Collaborated closely with the product development team to
                    design and launch new features and improvements for the
                    company&apos;s proprietary fintech products, enhancing
                    functionality, performance, and user experience.
                  </li>
                  <li className='ps-1 text-sm text-gray-600 dark:text-neutral-400'>
                    <span className='font-bold'>
                      Cross-Functional Collaboration:
                    </span>{' '}
                    Partnered with stakeholders across departments (Product,
                    UX/UI, DevOps) to align web development projects with
                    strategic objectives, resulting in streamlined processes and
                    accelerated delivery timelines.
                  </li>
                  <li className='ps-1 text-sm text-gray-600 dark:text-neutral-400'>
                    <span className='font-bold'>
                      Mentorship and Knowledge Sharing:
                    </span>{' '}
                    Mentored junior developers, fostering a culture of learning
                    and continuous improvement within the development team.
                  </li>
                </ul>
              </div>
              {/* <!-- End Right Content --> */}
            </div>

            {/* <!-- Item 2 --> */}
            <div className='group relative flex gap-x-5'>
              {/* <!-- Icon --> */}
              <div className='relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700'>
                <div className='relative z-10 size-6 flex justify-center items-center'>
                  <img
                    src='https://investcloud.com/wp-content/uploads/2024/09/IC-abbreviated-RGB.png'
                    alt=''
                    width='22'
                    height='19'
                  />
                </div>
              </div>
              {/* <!-- End Icon --> */}
              {/* <!-- Right Content --> */}
              <div className='grow pb-8 group-last:pb-0'>
                <h3 className='mb-1 text-xs text-gray-600 dark:text-neutral-400'>
                  2022 - 2024
                </h3>

                <p className='font-semibold text-sm text-gray-800 dark:text-neutral-200 mb-2'>
                  InvestCloud
                </p>

                <p className='font-semibold text-md text-gray-800 dark:text-neutral-200'>
                  Frontend Developer
                </p>

                <ul className='list-disc ms-6 mt-3 space-y-1.5'>
                  <li className='ps-1 text-sm text-gray-600 dark:text-neutral-400'>
                    Enhanced and maintained Rathbones asset management web
                    platform for improved user experience and compliance with
                    latest financial regulations.
                  </li>
                  <li className='ps-1 text-sm text-gray-600 dark:text-neutral-400'>
                    Led front-end development efforts, implemented new
                    interactive dashboards with React, integrated secure RESTful
                    APIs for real-time data, and optimized UI performance to
                    reduce load times by 30%.
                  </li>
                  <li className='ps-1 text-sm text-gray-600 dark:text-neutral-400'>
                    Successfully launched the enhanced platform within a tight
                    deadline, contributing to a 15% increase in user engagement
                    post-launch.
                  </li>
                  <li className='ps-1 text-sm text-gray-600 dark:text-neutral-400'>
                    Proficient in development and maintenance of the front-end
                    part of web-based applications, hybrid mobile applications
                    and websites.
                  </li>
                  <li className='ps-1 text-sm text-gray-600 dark:text-neutral-400'>
                    Experience in prototyping and POC development. In-depth
                    technical knowledge of cross-browser optimisation,
                    performance optimisation and Web Content Accessibility
                    Guidelines (WCAG) 2.0
                  </li>
                  <li className='ps-1 text-sm text-gray-600 dark:text-neutral-400'>
                    Fixed bugs from existing web applications and implemented
                    enhancements that significantly improved web functionality
                    and speed.
                  </li>
                  <li className='ps-1 text-sm text-gray-600 dark:text-neutral-400'>
                    Lead the development on two projects within InvestCloud,
                    coordinating deliverables with Project managers and Business
                    Analysts.
                  </li>
                  <li className='ps-1 text-sm text-gray-600 dark:text-neutral-400'>
                    Collaborated with a team of developers to successfully
                    complete 120 screens and components within a two-week
                    deadline, achieving what had never been done before at
                    InvestCloud.
                  </li>
                </ul>
              </div>
              {/* <!-- End Right Content --> */}
            </div>

            {/* <!-- Item 3 --> */}
            <div className='group relative flex gap-x-5'>
              {/* <!-- Icon --> */}
              <div className='relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700'>
                <div className='relative z-10 size-6 flex justify-center items-center'>
                  <img
                    src='https://www.gant.co.uk/on/demandware.static/Sites-Gant-UK-Site/-/default/dw12375ca5/images/favicons/favicon-32x32.png'
                    alt=''
                    width='22'
                    height='19'
                  />
                </div>
              </div>
              {/* <!-- End Icon --> */}
              {/* <!-- Right Content --> */}
              <div className='grow pb-8 group-last:pb-0'>
                <h3 className='mb-1 text-xs text-gray-600 dark:text-neutral-400'>
                  2020 - 2021
                </h3>

                <p className='font-semibold text-xs text-gray-800 dark:text-neutral-200 mb-2'>
                  Gant
                </p>

                <p className='font-semibold text-sm text-gray-800 dark:text-neutral-200'>
                  Assistant Manager
                </p>
              </div>
              {/* <!-- End Right Content --> */}
            </div>

            {/* <!-- Item 4 --> */}
            <div className='group relative flex gap-x-5'>
              {/* <!-- Icon --> */}
              <div className='relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700'>
                <div className='relative z-10 size-6 flex justify-center items-center'>
                  <img
                    src='https://www.thenorthface.co.uk/img/logos/thenorthface/default.svg'
                    alt=''
                    width='32'
                    height='39'
                  />
                </div>
              </div>
              {/* <!-- End Icon --> */}
              {/* <!-- Right Content --> */}
              <div className='grow pb-8 group-last:pb-0'>
                <h3 className='mb-1 text-xs text-gray-600 dark:text-neutral-400'>
                  2018 - 2019
                </h3>

                <p className='font-semibold text-xs text-gray-800 dark:text-neutral-200 mb-2'>
                  The North Face
                </p>

                <p className='font-semibold text-sm text-gray-800 dark:text-neutral-200'>
                  Supervisor
                </p>
              </div>
              {/* <!-- End Right Content --> */}
            </div>
          </div>
          {/* <!-- End Timeline --> */}
        </div>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'></footer>
    </div>
  )
}
