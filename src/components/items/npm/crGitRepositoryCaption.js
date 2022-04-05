const crGitRepositoryCaption = href =>
  (href || '').indexOf('https://github.com') !== -1
    ? 'GitHub Repository'
    : 'Repository';

export default crGitRepositoryCaption
