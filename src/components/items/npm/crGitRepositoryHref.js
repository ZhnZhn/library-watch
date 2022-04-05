const crGitRepositoryHref = url => (url || '')
 .replace('git+','')
 .replace('.git', '')
 .replace('git://','https://');

export default crGitRepositoryHref
