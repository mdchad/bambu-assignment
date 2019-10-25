import React, { useState } from 'react'
import Head from 'next/head'
import '../styles/index.css'
import fetch from 'isomorphic-unfetch'
import parse from 'html-react-parser'
import Input from "../components/Input";
import LoadingIcon from "../components/Loading";
import LocationIcon from "../components/LocationIcon";
import Error from "../components/Error";
import Container from "../components/Container";
import Button from "../components/Button";
import Header from "../components/Header";

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
    const [searched, setSearched] = useState<Boolean>(false)

    const submit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            setLoading(true)
            setSearched(true)
            setError(false)
            // by pass CORS
            const result = await fetch(`${'https://cors-anywhere.herokuapp.com/'}https://jobs.github.com/positions.json?location=${city}`);
            const json: Job[] = await result.json()
            setJob(json)
            setLoading(false)
        } catch (e) {
            console.error(e)
            setLoading(false)
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
                       <Button customStyle={{ flex: 'flex-1'}} testId="submit-input">Submit</Button>
                    </form>
                </div>
                <div className="my-10 mx-4 sm:my-10 sm:mx-4 md:my-32 md:mx-24 lg:my-32 lg:mx-24 xl:my-32 xl:mx-24">
                    { error ? <Error/> : null }
                    { loading ? <LoadingIcon/>
                        : !jobs.length && searched ? (
                            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                                <Container>
                                    <Header>
                                        No Jobs Found in {city}
                                    </Header>
                                </Container>
                            </div>
                        ) : !jobs.length && !searched ? (
                            <Container>
                                <Header>
                                    Start searching for jobs in your City. Here some of the popular cities: San Francisco, Berlin, London
                                </Header>
                            </Container>) : null
                    }
                    { !loading && searched && jobs.map(job => {
                    return (
                        <div className="max-w-sm w-full lg:max-w-full lg:flex">
                            <Container>
                                <p className="text-sm text-gray-600 flex items-center" data-testid="job-location">
                                    <LocationIcon />
                                    {job.location}
                                </p>
                                <div className="flex justify-between">
                                    <h1 className="text-gray-900 text-left font-bold text-xl mb-2">
                                        {job.title}
                                    </h1>
                                    <Button customStyle={{ width: 'w-16', textSize: 'text-xs', margin: 'my-8 md:m-0 lg:m-0 xl:m-0'}} onClick={() => window.open(job.url)}>View</Button>
                                </div>
                                <p className="text-gray-700 text-lg text-left mb-4">{job.company}</p>
                                <div className="text-gray-700 text-xs text-left">{parse(job.description)}</div>
                            </Container>
                        </div>
                    )})}
                </div>
            </div>
        </div>
    )
}

export default Home
