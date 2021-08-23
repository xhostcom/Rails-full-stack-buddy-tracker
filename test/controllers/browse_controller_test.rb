require "test_helper"

class BrowseControllerTest < ActionDispatch::IntegrationTest
  test "should get browse" do
    get browse_browse_url
    assert_response :success
  end

  test "should get approve" do
    get browse_approve_url
    assert_response :success
  end

  test "should get decline" do
    get browse_decline_url
    assert_response :success
  end
end
