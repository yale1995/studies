import { Queue } from ".."

export function hotPotato(names: string[], num: number) {
  const queue = new Queue<string>()
  for (const name of names) {
    queue.enqueue(name)
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }
  return queue.dequeue()
}