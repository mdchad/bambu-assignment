import React, { useState } from 'react'
import Head from 'next/head'
import '../styles/index.css'
import fetch from 'isomorphic-unfetch'
import parse from 'html-react-parser'
import Input from "../components/Input";

interface Job {
    id: string;
    type: string
    url: string
    created_at: string
    company: string
    company_url: string
    location: string
    title: string
    description: string
    how_to_apply: string
    company_logo: string
}

const Home: React.FC = (): JSX.Element => {
    const [city, setCity] = useState<string>('');
    const [jobs, setJob] = useState<Job[]>([]);
    const [error, setError] = useState<Boolean>(false)
    const [loading, setLoading] = useState<Boolean>(false)

    const submit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            // by pass CORS
            setLoading(true)
            const result = await fetch(`${'https://cors-anywhere.herokuapp.com/'}https://jobs.github.com/positions.json?location=${city}`);
            const json: Job[] = await result.json()
            setJob(json)
            setLoading(false)
        } catch (e) {
            console.error(e)
            setError(true)
        }
    }

    return (
        <div>
            <Head>
                <title>Job Portal</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <div className="m-auto antialiased font-sans font-serif font-mono text-center bg-gray-900 min-h-screen flex flex-col items-center text-white text-2xl">
                <div className="mt-10 flex flex-col">
                    <h1 className="text-3xl mb-2">Job Search</h1>
                    <form onSubmit={e => submit(e)} className="ml-4 flex flex-row" id="input-styling-address">
                       <Input setCity={setCity} />
                       <button className="flex-1 mx-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                    </form>
                </div>
                <div className="my-32 mx-24">
                    { jobs.length ? jobs.map(job => {
                    return (
                        <div className="max-w-sm w-full lg:max-w-full lg:flex">
                            <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <p className="text-sm text-gray-600 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-500 w-4 h-4 mr-2" viewBox="0 0 24 24" width="24" height="24">
                                        <path className="heroicon-ui"
                                              d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                    </svg>
                                    {job.location}
                                </p>
                                <div className="flex justify-between">
                                    <h1 className="text-gray-900 text-left font-bold text-xl mb-2">
                                        {job.title}
                                    </h1>
                                    <button className="w-16 mx-4 bg-indigo-500 hover:bg-indigo-700 text-white text-xs font-bold py-2 px-4 rounded" type="submit" onClick={() => window.open(job.url)}>View</button>
                                </div>
                                <p className="text-gray-700 text-lg text-left mb-4">{job.company}</p>
                                <div className="text-gray-700 text-xs text-left">{parse(job.description)}</div>
                            </div>
                        </div>
                    )}) :
                        <div className="max-w-sm w-full lg:max-w-full lg:flex">
                            <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <h1 className="text-gray-900 text-left font-bold text-xl mb-2">
                                    No Jobs Found
                                </h1>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
