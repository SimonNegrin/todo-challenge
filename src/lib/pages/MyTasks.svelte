<script lang="ts">
  import { Route, Router } from 'svelte-routing'
  import TasksList from '../components/TasksList.svelte'
  import TaskForm from '../components/TaskForm.svelte'

</script>

<Router basepath="/my-tasks">
  <Route path="/" component={TasksList} />
  <Route path="/create" component={TaskForm} />
</Router>
