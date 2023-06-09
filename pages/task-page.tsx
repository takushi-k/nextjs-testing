import Layout from '../components/Layout'
import { GetStaticProps } from 'next'
import { getAllTasksData } from '../lib/fetch'
import useSWR from 'swr'
import axios from 'axios'
import { TASK } from '../types/Types'

interface STATICPROPS {
  staticTasks: TASK[]
}

const axiosFetcher = async () => {
  console.log('axiosFetcher !!!!!!!!!!!!!!!!!')
  const result = await axios.get<TASK[]>(
    'https://jsonplaceholder.typicode.com/todos/?_limit=10'
  )
  return result.data
}

const TaskPage: React.FC<STATICPROPS> = ({ staticTasks }) => {
  const { data: tasks, error } = useSWR('todosFetch', axiosFetcher, {
    fallbackData: staticTasks,
    revalidateOnMount: true,
  })
  if (error) return <span>Error!</span>
  return (
    <Layout title="Todos22222">
      <p className="mb-10 text-4xl">todos page</p>
      <ul>
        {tasks &&
          tasks.map((task) => (
            <li key={task.id}>
              {task.id}
              {': '}
              <span>{task.title}</span>
            </li>
          ))}
      </ul>
      <p>aaaaaaaaaaaaaaaaa</p>
    </Layout>
  )
}
export default TaskPage

export const getStaticProps: GetStaticProps = async () => {
  console.log('getStaticProps !!!!!!!!!!')
  const staticTasks = await getAllTasksData()
  console.log(staticTasks)
  return {
    props: { staticTasks },
  }
}
