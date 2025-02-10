<% include partials/_header %>

<div class="container">
  <div class="row">
    <!--FORM-->
    <div class="col-md-5 offset-md-3">
      <div class="card">
        <div class="card-body">
          <form action="/tasks/edit/<%= task._id %>" method="post">
            <div class="form-group">
              <input class="form-control" type="text" name="title" placeholder="Title" value="<%= subject.title %>">
            </div>
            <div class="form-group">
              <textarea class="form-control" name="description" cols="80"
                placeholder="Add a Description"
                ><%= subject.description %></textarea>
            </div>
            <button class="btn btn-primary" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

<% include partials/_footer%>