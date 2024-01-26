<script lang="ts">

  import './app.css'
  import { Route, Router } from 'svelte-routing'
  import Header from './lib/components/Header.svelte'
  import Navigation from './lib/components/Navigation.svelte'
  import MyData from './lib/pages/MyData.svelte'
  import MyTasks from './lib/pages/MyTasks.svelte'
  import MyReturns from './lib/pages/MyReturns.svelte'
  import MyComunications from './lib/pages/MyComunications.svelte'
  import MyBestFriends from './lib/pages/MyBestFriends.svelte'
  import Redirect from './lib/components/Redirect.svelte'

</script>

<Router>
  <div class="h-svh bg-green-50 flex flex-col">
    <Header />
    <Navigation />
    <div class="grow overflow-auto">
      <Route path="/my-data" component={MyData} />
      <Route path="/my-tasks" component={MyTasks} />
      <Route path="/my-returns" component={MyReturns} />
      <Route path="/my-comunications" component={MyComunications} />
      <Route path="/my-best-friends" component={MyBestFriends} />
      <Route path="*">
        <Redirect to="/my-data" />
      </Route>
    </div>
  </div>
</Router>
