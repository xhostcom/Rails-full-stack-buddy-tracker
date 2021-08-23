class BrowseController < ApplicationController
  def browse
    @users = User.where.not(id: current_user.id)
  end

  def approve
  end

  def decline
  end
end
