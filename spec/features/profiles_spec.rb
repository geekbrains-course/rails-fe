require 'rails_helper'

describe 'edit user page', type: :feature do
  let(:user) { create(:user) }
  let(:info) { 'Test Info' }

  before do
    login_as user
    visit edit_profile_path
  end

  context 'page opens correctly' do
    it 'has required elements' do
      expect(page).to have_content('Info')
      expect(page).to have_button('Save')
    end

    it 'updates info via ActionText editor' do
      find(:xpath, "//*[@id='user_info_trix_input_user_#{user.id}']", visible: false).set(info)
      find_button('Save').click

      expect(user.reload.info.body.to_s).to include(info)
    end

    it 'has Click Me button' do
      expect(page).to have_css('#click-me')
    end
  end
end
